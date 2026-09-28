import { themes } from "@/components/section-pages/sectionTheme";
import SectionHero from "@/components/section-pages/SectionHero";
import FilterPills from "@/components/section-pages/FilterPills";
import QuoteCard from "@/components/section-pages/QuoteCard";
import ExperienceCard from "@/components/section-pages/ExperienceCard";
import DoodleIcon from "@/components/DoodleIcon";

const theme = themes.internship;

const filters = [
  { id: "all", label: "All", labelCn: "全部" },
  { id: "product", label: "Product", labelCn: "产品" },
  { id: "ai", label: "AI / LLM", labelCn: "AI" },
  { id: "data", label: "Data", labelCn: "数据" },
  { id: "others", label: "Others", labelCn: "其他" },
];

const experiences: Array<{
  theme: typeof theme;
  company: string;
  position: string;
  positionCn: string;
  period: string;
  description: string;
  descriptionCn: string;
  tags: string[];
  index?: number;
}> = [
  // TODO: Add real internship experiences here
];

function PlantDoodle() {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 38V20" stroke="#302A23" strokeWidth="1.6" />
      <path d="M18 20c0-6-4-10-9-10 0 6 3 11 9 12z" stroke="#302A23" strokeWidth="1.6" fill="#94B991" fillOpacity="0.4" />
      <path d="M18 16c0-5 3-8 8-8 0 5-3 9-8 10z" stroke="#302A23" strokeWidth="1.6" fill="#94B991" fillOpacity="0.4" />
      <circle cx="24" cy="8" r="2" fill="#F7C948" stroke="#302A23" strokeWidth="1.2" />
    </svg>
  );
}

export default function InternshipPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-8">
      {/* Hero */}
      <SectionHero
        theme={theme}
        icon={
          <DoodleIcon name="briefcase" size={36} stroke="#322B25" fill="#F2A7A0" accent="#F7C948" />
        }
        title="Internship"
        chineseTitle="实习经历"
        description="Turning ideas into real products."
        chineseDescription="在真实的业务场景中学习、实践、成长。"
      />

      {/* Filters */}
      <div className="mt-4 md:mt-6">
        <FilterPills theme={theme} filters={filters} />
      </div>

      {/* Main content: cards + quote */}
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-10">
        {/* Left: cards ~75% */}
        <div className="flex flex-col gap-5 md:w-[75%]">
          {experiences.length > 0 ? (
            experiences.map((card, i) => (
              <ExperienceCard key={i} {...card} theme={theme} index={i} />
            ))
          ) : (
            <div
              className="rounded-[22px] border-[1.5px] border-dashed p-8 text-center"
              style={{
                borderColor: `${theme.border}50`,
                backgroundColor: theme.cardBg,
              }}
            >
              <p className="text-sm text-[#8a7c62]">TODO: Internship experiences coming soon</p>
            </div>
          )}
        </div>

        {/* Right: quote ~25% */}
        <div className="md:w-[25%]">
          <div className="md:sticky md:top-24">
            <QuoteCard
              theme={theme}
              quote={["Stay curious,", "stay humble,", "keep building."]}
              doodle={<PlantDoodle />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
