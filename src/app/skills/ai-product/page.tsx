import SkillSubPageLayout from "@/components/skills/SkillSubPageLayout";
import SkillSectionTitle from "@/components/skills/SkillSectionTitle";
import { aiProductProcess, aiProductToolkit, aiProductNotes, SK } from "@/data/skills";

export const metadata = {
  title: "AI Product | AZY HE",
  description: "How I think about AI products. From ideas to clear AI product logic.",
};

export default function AiProductPage() {
  return (
    <SkillSubPageLayout
      currentId="ai-product"
      number="01"
      verb="THINK"
      title="AI PRODUCT"
      titleZh="AI 产品"
      description="How I think about AI products. Turning ambiguous needs into clear AI product logic."
      keywords={["需求理解", "产品设计", "AI Workflow", "模型评测", "产品迭代"]}
    >
      {/* Product Process */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Product Process"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          }
        />

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start justify-between gap-2">
          {aiProductProcess.map((step, i) => (
            <div key={step.step} className="flex flex-1 items-start gap-1">
              <div
                className="group/process flex-1 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 transition-all hover:-translate-y-1 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
              >
                <span className="text-xs font-bold" style={{ color: SK.accent }}>{step.step}</span>
                <h3 className="mt-1 text-base font-bold text-[#3b3328]">{step.title}</h3>
                <p className="font-cn mt-0.5 text-sm font-medium text-[#8a7c62]">{step.titleZh}</p>
                <ul className="mt-2 space-y-1">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#5c5045]">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SK.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs italic text-[#8a9e85] opacity-0 transition-opacity duration-200 group-hover/process:opacity-100">
                  {step.thinking}
                </p>
              </div>
              {i < aiProductProcess.length - 1 && (
                <div className="flex shrink-0 items-center self-center pt-2" style={{ color: SK.accent }}>
                  <span className="text-lg">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col gap-3 md:hidden">
          {aiProductProcess.map((step, i) => (
            <div key={step.step} className="flex items-start gap-3">
              <div className="flex-1 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-4">
                <span className="text-xs font-bold" style={{ color: SK.accent }}>{step.step}</span>
                <h3 className="mt-0.5 text-sm font-bold text-[#3b3328]">{step.title}</h3>
                <p className="font-cn text-xs text-[#8a7c62]">{step.titleZh}</p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {step.items.map((item) => (
                    <span key={item} className="text-xs text-[#5c5045]">{item}</span>
                  ))}
                </div>
                <p className="mt-2 text-[11px] italic text-[#8a9e85]">{step.thinking}</p>
              </div>
              {i < aiProductProcess.length - 1 && (
                <div className="flex shrink-0 items-center justify-center self-center" style={{ color: SK.accent }}>
                  <span className="text-lg">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Product Toolkit */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Product Toolkit"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiProductToolkit.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 transition-all hover:-translate-y-0.5 hover:border-[#a5c9a0] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              <h3 className="text-base font-bold text-[#3b3328]">{tool.name}</h3>
              <p className="font-cn mt-0.5 text-sm text-[#8a7c62]">{tool.nameZh}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {tool.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border px-2 py-0.5 text-[11px] font-medium"
                    style={{ borderColor: SK.tagBorder, backgroundColor: SK.tagBg, color: SK.tagText }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Notes & Docs */}
      <section className="animate-reveal">
        <SkillSectionTitle
          title="Product Notes & Docs"
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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiProductNotes.map((note) => (
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
                <span className="rounded-full border px-2.5 py-0.5 text-xs font-medium" style={{ borderColor: SK.tagBorder, backgroundColor: SK.tagBg, color: SK.tagText }}>
                  {note.type}
                </span>
                <span className="text-xs text-[#a09480]">Coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SkillSubPageLayout>
  );
}
