import { themes } from "@/components/section-pages/sectionTheme";
import SectionHero from "@/components/section-pages/SectionHero";
import FilterPills from "@/components/section-pages/FilterPills";
import QuoteCard from "@/components/section-pages/QuoteCard";
import ProjectCard from "@/components/section-pages/ProjectCard";
import DoodleIcon from "@/components/DoodleIcon";

const theme = themes.engineering;

const filters = [
  { id: "all", label: "All", labelCn: "全部" },
  { id: "ai-app", label: "AI 应用", labelCn: "AI" },
  { id: "web", label: "Web 开发", labelCn: "Web" },
  { id: "tools", label: "Tools", labelCn: "工具" },
  { id: "others", label: "Others", labelCn: "其他" },
];

const projects: Array<{
  theme: typeof theme;
  name: string;
  description: string;
  descriptionCn: string;
  tags: string[];
  image?: string;
  status?: string;
  index?: number;
}> = [
  // TODO: Add real projects here
];

function WrenchDoodle() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 10l6 6-4 4 8 8 4-4 6 6" stroke="#302A23" strokeWidth="1.8" fill="none" />
      <circle cx="34" cy="34" r="5" stroke="#302A23" strokeWidth="1.8" fill="#86CDA7" fillOpacity="0.3" />
    </svg>
  );
}

export default function EngineeringPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-8">
      {/* Hero */}
      <SectionHero
        theme={theme}
        icon={
          <DoodleIcon name="computer" size={36} stroke="#322B25" fill="#E8A268" accent="#F7C948" />
        }
        title="Engineering"
        chineseTitle="工程项目"
        description="Building things that work."
        chineseDescription="从想法到实现，把创意变成可用的产品。"
      />

      {/* Filters */}
      <div className="mt-4 md:mt-6">
        <FilterPills theme={theme} filters={filters} />
      </div>

      {/* Main content: cards + quote */}
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-10">
        {/* Left: cards ~75% */}
        <div className="flex flex-col gap-5 md:w-[75%]">
          {projects.length > 0 ? (
            projects.map((project, i) => (
              <ProjectCard key={i} {...project} theme={theme} index={i} />
            ))
          ) : (
            <div
              className="rounded-[22px] border-[1.5px] border-dashed p-8 text-center"
              style={{
                borderColor: `${theme.border}50`,
                backgroundColor: theme.cardBg,
              }}
            >
              <p className="text-sm text-[#8a7c62]">TODO: Projects coming soon</p>
            </div>
          )}
        </div>

        {/* Right: quote ~25% */}
        <div className="md:w-[25%]">
          <div className="md:sticky md:top-24">
            <QuoteCard
              theme={theme}
              quote={["Ideas are easy.", "Building is the hard", "(and fun) part."]}
              doodle={<WrenchDoodle />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
