import CategoryCard from "@/components/CategoryCard";
import DoodleIcon from "@/components/DoodleIcon";
import HeroDoodle from "@/components/HeroDoodle";
import HeroIntro from "@/components/HeroIntro";

const tags = [
  { label: "AI Product", bg: "#FFF0F0", border: "#c9a0a0" },
  { label: "LLM", bg: "#F0F5FF", border: "#9ab0d0" },
  { label: "VLM", bg: "#F0FFF4", border: "#8fbfa0" },
  { label: "Agent", bg: "#F3F0FF", border: "#a898c8" },
];

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      {/* ===== A. Personal Intro ===== */}
      <section className="relative pt-10 md:pt-14 lg:pt-16">
        <div className="relative mx-auto max-w-md md:max-w-lg lg:max-w-xl">
          {/* 月亮 — 左上 */}
          <HeroDoodle
            type="moon"
            size={32}
            animation="blink"
            duration={4.1}
            delay={0}
            className="absolute left-2 top-0 md:-left-6 lg:-left-10"
          />

          {/* 小闪光 — 月亮附近 */}
          <HeroDoodle
            type="sparkle"
            size={18}
            animation="blink"
            duration={2.4}
            delay={0.5}
            className="absolute left-10 top-5 md:left-2 md:top-6 lg:left-0 hidden sm:block"
          />

          {/* 蝴蝶结 — 名字左侧 */}
          <HeroDoodle
            type="bow"
            size={28}
            animation="blink"
            duration={3.5}
            delay={1}
            className="absolute left-1 top-20 md:-left-4 lg:-left-8"
          />

          {/* 小云朵 — 右上，带 float */}
          <HeroDoodle
            type="cloud"
            size={34}
            animation="blink-float"
            duration={4.7}
            delay={0.5}
            className="absolute right-2 top-0 md:-right-4 lg:-right-8"
          />

          {/* 纸飞机 — 名字右侧，带 float */}
          <HeroDoodle
            type="paperPlane"
            size={26}
            animation="blink-float"
            duration={5.2}
            delay={1.4}
            className="absolute right-4 top-16 md:-right-2 lg:-right-6 hidden sm:block"
          />

          {/* 猫爪 — 右下 */}
          <HeroDoodle
            type="paw"
            size={28}
            animation="blink"
            duration={2.9}
            delay={2}
            className="absolute right-1 top-36 md:-right-4 lg:-right-8 hidden sm:block"
          />

          {/* 小樱桃 — 左下 */}
          <HeroDoodle
            type="cherry"
            size={26}
            animation="blink"
            duration={3.5}
            delay={1.4}
            className="absolute left-4 bottom-4 md:left-0 md:-bottom-2 lg:-left-4 hidden md:block"
          />

          <HeroIntro />
        </div>
      </section>

      {/* ===== B. Explore ===== */}
      <section className="relative mt-10 md:mt-14 lg:mt-16">
        {/* 小芽 — Explore 标题左侧 */}
        <HeroDoodle
          type="sprout"
          size={24}
          animation="sway"
          duration={4}
          delay={0.3}
          className="absolute left-2 top-2 md:left-4 lg:left-8 hidden sm:block"
        />

        {/* Explore My World 标题 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="hidden sm:inline-block animate-sway" style={{ animationDelay: "0.5s" }}>
            <DoodleIcon name="flower" size={24} stroke="#322B25" fill="#8FB18B" accent="#F7C948" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#3b3328] md:text-4xl">
            Explore My World
          </h2>

          <div className="hidden sm:inline-block animate-twinkle" style={{ animationDelay: "1s" }}>
            <DoodleIcon name="star" size={22} stroke="#322B25" fill="#F7C948" />
          </div>

          <span className="font-cn text-lg font-medium text-[#8a7c62] md:text-xl">
            探索我的经历
          </span>

          <div className="hidden sm:inline-block animate-twinkle" style={{ animationDelay: "1.8s" }}>
            <DoodleIcon name="sparkle" size={20} stroke="#322B25" fill="#E8A268" />
          </div>
        </div>

        {/* 手绘波浪分隔线 */}
        <div className="mx-auto flex max-w-xs justify-center md:max-w-sm">
          <div className="animate-wave" style={{ animationDelay: "0.8s" }}>
            <DoodleIcon name="wave" size={80} stroke="#322B25" fill="#F7C948" />
          </div>
        </div>

        {/* 探索标签 */}
        <div className="mt-2 mb-5 flex flex-wrap items-center justify-center gap-2.5 md:gap-3.5">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-base font-semibold text-[#3b3328] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(92,79,61,0.10)] md:px-5 md:py-2 md:text-lg"
              style={{
                backgroundColor: tag.bg,
                borderColor: tag.border,
                borderWidth: "1.5px",
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* ===== 卡片布局：2 columns × 3 rows ===== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {/* 第一行：Internship + Research */}
          <CategoryCard
            icon="briefcase"
            stroke="#322B25"
            fill="#F2A7A0"
            accent="#F7C948"
            title="Internship"
            chineseTitle="实习经历"
            description="AI product design, VLM evaluation, Agent workflows and data operations."
            chineseDescription="AI 产品设计、VLM 评测、Agent 工作流与数据运营。"
            href="/internship"
            color="#FFF0F0"
            borderColor="#c9a0a0"
          />

          <CategoryCard
            icon="book"
            stroke="#322B25"
            fill="#8DB9E5"
            accent="#F7C948"
            title="Research"
            chineseTitle="科研经历"
            description="Research papers, algorithms, experiments and academic work."
            chineseDescription="论文、算法研究、实验设计与科研工作。"
            href="/research"
            color="#F0F5FF"
            borderColor="#9ab0d0"
          />

          {/* 第二行：Engineering + Skills */}
          <CategoryCard
            icon="computer"
            stroke="#322B25"
            fill="#E8A268"
            accent="#F7C948"
            title="Engineering"
            chineseTitle="工程项目"
            description="AI systems, computer vision and engineering projects."
            chineseDescription="AI 系统、计算机视觉与工程实践项目。"
            href="/engineering"
            color="#FFF5E6"
            borderColor="#d4b896"
          />

          <CategoryCard
            icon="pencil"
            stroke="#322B25"
            fill="#8FB18B"
            accent="#F7C948"
            title="Skills"
            chineseTitle="个人技能"
            description="AI, product, programming, data analysis and creative skills."
            chineseDescription="AI、产品、编程、数据分析与创意能力。"
            href="/skills"
            color="#F0FFF4"
            borderColor="#8fbfa0"
          />

          {/* 第三行：Honors + Leveling Up */}
          <CategoryCard
            icon="trophy"
            stroke="#322B25"
            fill="#F7C948"
            accent="#E8A268"
            title="Honors"
            chineseTitle="荣誉证书"
            description="Scholarships, competitions, awards and certificates."
            chineseDescription="奖学金、竞赛奖项、荣誉称号与证书。"
            href="/honors"
            color="#FFF3E0"
            borderColor="#d4b080"
          />

          <CategoryCard
            icon="sprout"
            stroke="#322B25"
            fill="#8FB18B"
            accent="#A995D1"
            title="Leveling Up"
            chineseTitle="升级中"
            description="Still learning, building, and growing."
            chineseDescription="持续学习，持续尝试，也持续升级自己。"
            href="/leveling-up"
            color="#F3F0FF"
            borderColor="#a898c8"
          />
        </div>
      </section>
    </main>
  );
}
