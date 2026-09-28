import { themes } from "@/components/section-pages/sectionTheme";
import SectionHero from "@/components/section-pages/SectionHero";
import QuoteCard from "@/components/section-pages/QuoteCard";
import ComingSoonCard from "@/components/section-pages/ComingSoonCard";
import DoodleIcon from "@/components/DoodleIcon";

const theme = themes["leveling-up"];

function HeartDoodle() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42C24 42 6 30 6 18a9 9 0 0 1 18 0 9 9 0 0 1 18 0c0 12-18 24-18 24z" stroke="#302A23" strokeWidth="1.8" fill="#F3AAA7" fillOpacity="0.4" />
    </svg>
  );
}

export default function LevelingUpPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-8">
      {/* Hero */}
      <SectionHero
        theme={theme}
        icon={
          <DoodleIcon name="sprout" size={36} stroke="#322B25" fill="#8FB18B" accent="#A995D1" />
        }
        title="Leveling Up"
        chineseTitle="升级中"
        description="A better me, in progress."
        chineseDescription="持续探索中，更多精彩内容即将上线！"
      />

      {/* Main content: coming soon card + quote */}
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-10">
        {/* Left: coming soon ~75% */}
        <div className="md:w-[75%]">
          <ComingSoonCard theme={theme} progress={70} />
        </div>

        {/* Right: quote ~25% */}
        <div className="md:w-[25%]">
          <div className="md:sticky md:top-24">
            <QuoteCard
              theme={theme}
              quote={["Good things", "take time", ":)"]}
              doodle={<HeartDoodle />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
