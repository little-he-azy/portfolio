import { themes } from "@/components/section-pages/sectionTheme";
import SectionHero from "@/components/section-pages/SectionHero";
import PublicationCard from "@/components/research/PublicationCard";
import DoodleIcon from "@/components/DoodleIcon";
import { researchFocus, publications, RE } from "@/data/research";

const theme = themes.research;

export const metadata = {
  title: "Research | AZY HE",
  description: "Exploring the unknown with curiosity.",
};

export default function ResearchPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-8">
      {/* Hero */}
      <SectionHero
        theme={theme}
        icon={
          <DoodleIcon name="book" size={36} stroke="#322B25" fill="#8DB9E5" accent="#F7C948" />
        }
        title="Research"
        chineseTitle="科研经历"
        description="Exploring the unknown with curiosity."
        chineseDescription="用好奇心探索未知，用研究思维解决问题。"
      />

      {/* Research Focus */}
      <section className="animate-reveal mt-8 md:mt-10">
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: RE.accent }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <h2 className="text-xl font-bold text-[#3b3328] md:text-2xl">Research Focus</h2>
          <span className="font-cn text-sm font-medium text-[#8a7c62]">研究方向</span>
          <div className="ml-auto hidden h-[1px] flex-1 md:block" style={{ backgroundColor: `${RE.border}40` }} />
        </div>

        <div className="mt-5 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-6 md:p-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-[#3b3328] md:text-xl">{researchFocus.title}</h3>
            <p className="font-cn text-sm font-medium text-[#8a7c62]">{researchFocus.titleZh}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#5c5045]">{researchFocus.description}</p>
          <p className="font-cn mt-1 text-sm leading-relaxed text-[#8a7c62]">{researchFocus.descriptionZh}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {researchFocus.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: RE.tagBorder, backgroundColor: RE.tagBg, color: RE.tagText }}
              >
                {kw}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {researchFocus.areas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-[#c8d9c4] bg-[#fffdf5] p-4 transition-all hover:-translate-y-0.5 hover:border-[#91BCE8] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
              >
                <h4 className="text-sm font-bold text-[#3b3328]">{area.title}</h4>
                <p className="font-cn text-xs text-[#8a7c62]">{area.titleZh}</p>
                <ul className="mt-2 space-y-1">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#5c5045]">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: RE.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="animate-reveal mt-8 md:mt-10">
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: RE.accent }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <h2 className="text-xl font-bold text-[#3b3328] md:text-2xl">Selected Publications</h2>
          <span className="font-cn text-sm font-medium text-[#8a7c62]">代表性论文</span>
          <div className="ml-auto hidden h-[1px] flex-1 md:block" style={{ backgroundColor: `${RE.border}40` }} />
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.slug} publication={pub} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
