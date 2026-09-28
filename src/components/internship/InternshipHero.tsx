import DoodleIcon from "@/components/DoodleIcon";

export default function InternshipHero() {
  return (
    <section className="relative pt-10 pb-6 md:pt-14 md:pb-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        {/* 左侧标题 */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <DoodleIcon name="briefcase" size={40} stroke="#322B25" fill="#F2A7A0" accent="#F7C948" />
            <h1 className="text-4xl font-bold tracking-tight text-[#3b3328] md:text-5xl">
              Internship
            </h1>
          </div>

          <p className="font-cn mt-2 text-xl font-medium text-[#8a7c62]">
            实习经历
          </p>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#6d675d] md:mx-0 md:max-w-sm">
            Turning ideas into real products.
          </p>
          <p className="font-cn mx-auto mt-1 max-w-md text-sm leading-relaxed text-[#8a7c62] md:mx-0 md:max-w-sm">
            在真实的业务场景中学习、实践、成长。
          </p>
        </div>

        {/* 右侧插画 */}
        <div className="relative hidden md:block">
          <div className="animate-float">
            <WorkDoodle />
          </div>
          <p className="absolute -bottom-2 -right-4 rotate-[-8deg] text-sm font-medium text-[#8a7c62]">
            Good Ideas
            <br />
            Better Products!
          </p>
        </div>
      </div>
    </section>
  );
}

function WorkDoodle() {
  return (
    <svg width="180" height="140" viewBox="0 0 180 140" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* 桌子 */}
      <rect x="20" y="70" width="140" height="8" rx="3" stroke="#302A23" strokeWidth="2" fill="#F7C948" fillOpacity="0.3" />
      <rect x="35" y="78" width="8" height="40" rx="2" stroke="#302A23" strokeWidth="1.8" fill="#D6E8F7" fillOpacity="0.3" />
      <rect x="137" y="78" width="8" height="40" rx="2" stroke="#302A23" strokeWidth="1.8" fill="#D6E8F7" fillOpacity="0.3" />

      {/* 笔记本电脑 */}
      <rect x="60" y="48" width="60" height="38" rx="4" stroke="#302A23" strokeWidth="2" fill="#F0F5FF" fillOpacity="0.5" />
      <rect x="65" y="53" width="50" height="28" rx="2" stroke="#302A23" strokeWidth="1.5" fill="#fff" fillOpacity="0.6" />
      <line x1="72" y1="60" x2="108" y2="60" stroke="#94B991" strokeWidth="1.5" />
      <line x1="72" y1="67" x2="98" y2="67" stroke="#F1A7A2" strokeWidth="1.5" />
      <line x1="72" y1="73" x2="103" y2="73" stroke="#91BCE3" strokeWidth="1.5" />

      {/* 咖啡杯 */}
      <path d="M135 55h12v14a6 6 0 0 1-6 6h-6V55z" stroke="#302A23" strokeWidth="1.8" fill="#F8D4D1" fillOpacity="0.4" />
      <path d="M147 60a4 4 0 0 1 0 8" stroke="#302A23" strokeWidth="1.5" fill="none" />
      <path d="M138 50q2-4 5-2" stroke="#302A23" strokeWidth="1.2" />

      {/* 小植物 */}
      <path d="M28 70c0-12-6-18-12-18 0 10 4 16 12 18z" stroke="#302A23" strokeWidth="1.6" fill="#94B991" fillOpacity="0.4" />
      <path d="M28 70c0-10 5-15 10-15 0 8-4 14-10 15z" stroke="#302A23" strokeWidth="1.6" fill="#94B991" fillOpacity="0.4" />
      <path d="M28 58v12" stroke="#302A23" strokeWidth="1.6" />

      {/* 星星装饰 */}
      <path d="M150 25l2.5 6.5h6.5l-5 4 2 6.5-5.5-4-5.5 4 2-6.5-5-4h6.5z" stroke="#302A23" strokeWidth="1.5" fill="#F7C948" fillOpacity="0.5" />
      <path d="M40 30l1.5 4h4l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h4z" stroke="#302A23" strokeWidth="1.2" fill="#F1A7A2" fillOpacity="0.45" />
    </svg>
  );
}
